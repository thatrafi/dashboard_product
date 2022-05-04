import Button from 'components/button';
import Card from 'components/card';
import Map from 'components/map';
import Navigation from 'components/navigation';
import ProductAttributes from 'components/product/productAttributes';
import ProductDescription from 'components/product/productDescription';
import ProductImage from 'components/product/productImage';
import Row from 'components/row';
import Tab from 'components/tab';
import UserInformation from 'components/user/userInformation';
import { useRef } from 'react';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const descInput = useRef('');
  const tabsContent = [
    { title: 'Description', content: <ProductDescription ref={descInput} /> },
    { title: 'Attributes', content: <ProductAttributes /> }
  ];
  const onClickHandler = () => {
    console.log(descInput.current.value);
  };

  return (
    <Row>
      <Navigation />
      <Card className="fit">
        <div className={styles.productInformation}>
          <ProductImage />
          <div className="mainInfo">
            <h1>This is Product Name</h1>
            <span>Software</span>
          </div>
          <div className="tabs">
            <Tab active={0}>
              {tabsContent.map((tab, index) => (
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
        <UserInformation />
        <Map />
      </div>
    </Row>
  );
};

export default ProductPage;
