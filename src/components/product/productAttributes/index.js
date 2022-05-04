import React, { useState, useEffect } from 'react';
import AttributeForm from 'components/attributeForm';
import styles from './ProductAttributes.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from 'reducers/productReducer';

const ProductAttributes = (props) => {
  const dispatch = useDispatch();
  const [categoriesData, setCategoriesData] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [myTrlData, setMyTrlData] = useState([]);
  const trlData = useSelector((state) => state.trl.TrlsData);

  useEffect(() => {
    setCategoriesData(props.categories);
    setBusinessData(props.businessModels);
    setMyTrlData(props.trl.length > 0 ? props.trl : [props.trl]);
  }, []);

  useEffect(() => {
    dispatch(productActions.updateCategories({ data: categoriesData }));
  }, [categoriesData]);

  useEffect(() => {
    dispatch(productActions.updateTrls({ data: myTrlData }));
  }, [myTrlData]);

  useEffect(() => {
    dispatch(productActions.updateBusinessModels({ data: businessData }));
  }, [businessData]);

  const addCategoryData = () => {
    const random = (Math.random() + 1).toString(36).substring(7);
    setCategoriesData((item) => [...item, { id: random, name: '' }]);
  };

  const addBusinessData = () => {
    const random = (Math.random() + 1).toString(36).substring(7);
    setBusinessData((item) => [...item, { id: random, name: '' }]);
  };

  const addTrlData = () => {
    setMyTrlData((item) => [...item, { id: '', name: '', description: null }]);
  };

  const updateCategoryData = (id, value) => {
    setCategoriesData(
      categoriesData.map((item) => (item.id === id ? { ...item, name: value } : item))
    );
  };

  const updateBusinessData = (id, value) => {
    setBusinessData(businessData.map((item) => (item.id === id ? { ...item, name: value } : item)));
  };

  const updateSelectData = (id, data) => {
    let updatedData = trlData.find((item) => item.id === data);
    let hasData = myTrlData.find((item) => item.id === updatedData.id);
    if (hasData) {
      window.alert('already has data!');
    } else {
      let tempData = [...myTrlData];
      tempData[id] = { ...tempData[id], ...updatedData };
      setMyTrlData(tempData);
    }
  };
  return (
    <div className={styles.wrapper}>
      {categoriesData && (
        <AttributeForm
          title="Categories"
          formName="categories"
          data={categoriesData}
          onAddClick={addCategoryData}
          onUpdateData={updateCategoryData}
        />
      )}
      {businessData && (
        <AttributeForm
          title="Business Model"
          formName="businessModels"
          isPrimary={true}
          data={businessData}
          onAddClick={addBusinessData}
          onUpdateData={updateBusinessData}
        />
      )}
      {myTrlData && trlData && (
        <AttributeForm
          title="Trl"
          formName="trl"
          data={myTrlData}
          isSelect={true}
          onUpdateSelectData={updateSelectData}
          onAddClick={addTrlData}
          selectSource={trlData}
        />
      )}
    </div>
  );
};

export default ProductAttributes;
