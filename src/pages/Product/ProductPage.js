import { getProductDetailAsync, putProductDetailAsync } from 'actions/productActions';
import { getTrlAsync } from 'actions/trlActions';
import Button from 'components/button';
import Card from 'components/card';
import Map from 'components/map';
import MyModal from 'components/modal';
import Navigation from 'components/navigation';
import ProductAttributes from 'components/product/productAttributes';
import ProductDescription from 'components/product/productDescription';
import ProductImage from 'components/product/productImage';
import Row from 'components/row';
import Tab from 'components/tab';
import UserInformation from 'components/user/userInformation';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from 'reducers/productReducer';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.ProductData);
  const responseData = useSelector((state) => state.product.PostResponse);
  const descInput = useRef('');
  const setting = useSelector((state) => state.setting.SettingsData);
  useEffect(() => {
    dispatch(getProductDetailAsync());
    dispatch(getTrlAsync());
  }, []);

  const onChangeHandler = () => {
    dispatch(productActions.updateDescription({ data: descInput.current.value }));
  };

  const onClickHandler = () => {
    dispatch(putProductDetailAsync({ data: data }));
  };

  const confirmHandler = () => {
    dispatch(productActions.setPostResponse({ data: null }));
  };

  let tabContent = [
    {
      title: 'Descriptions',
      content: (
        <ProductDescription
          onChangeDesc={onChangeHandler}
          text={data.description}
          ref={descInput}
        />
      )
    },
    {
      title: 'Attributes',
      content: (
        <ProductAttributes
          categories={data.categories}
          businessModels={data.businessModels}
          trl={data.trl}
        />
      )
    }
  ];

  return (
    <Row>
      <Navigation />
      <Card>
        <div className={styles.productInformation}>
          <ProductImage name="product image" src={data.picture} />
          <div className="mainInfo">
            <h1>{data.name || 'This is Product Name'}</h1>
            <span>{data.type ? data.type.name : 'Software'}</span>
          </div>
          <div className="tabs">
            <Tab active={0}>
              {tabContent &&
                tabContent.map((tab, index) => (
                  <Tab.TabPane key={index} tab={tab.title}>
                    {tab.content}
                  </Tab.TabPane>
                ))}
            </Tab>
          </div>
          <div className="btnAction">
            <Button className="rounded primary big" label="Edit" onClick={onClickHandler} />
          </div>
        </div>
      </Card>
      <div className={styles.userInformation}>
        {setting.hasUserSection && data.user && data.company && (
          <UserInformation
            userName={`${data.user.firstName} ${data.user.lastName}`}
            companyName={data.company.name}
            image={data.user.profilePicture}
          />
        )}

        {data.company ? (
          <Map
            lat={data.company.address.latitude || '0.5'}
            lng={data.company.address.longitude || '0.4'}
          />
        ) : (
          <Map />
        )}
      </div>
      {responseData && (
        <MyModal
          title={responseData.isError ? 'Error' : 'Success'}
          message={responseData.message}
          result={responseData.result && JSON.stringify(responseData.result.data)}
          onConfirm={confirmHandler}
        />
      )}
    </Row>
  );
};

export default ProductPage;
