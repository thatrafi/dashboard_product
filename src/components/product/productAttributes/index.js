import React, { useState, useEffect } from 'react';
import AttributeForm from 'components/attributeForm';
import styles from './ProductAttributes.module.scss';

const categories = [
  {
    id: 5101,
    name: 'IT platforms'
  },
  {
    id: 5100,
    name: 'B2B marketplaces'
  }
];

const businessModels = [
  {
    id: 65,
    name: 'Pay-Per-Use'
  },
  {
    id: 1155,
    name: 'Subscription'
  },
  {
    id: 374,
    name: 'White-Label'
  },
  {
    id: 66,
    name: 'Peer-to-Peer (P2P)'
  }
];

const myTrl = [
  {
    id: 'trl2',
    name: 'TRL 2 \u2013 Technology concept formulated (business plan available)',
    description: null
  }
];

const trlData = [
  {
    id: 'trl1',
    name: 'TRL 1 \u2013 Basic principles observed (product idea available)',
    description: null
  },
  {
    id: 'trl2',
    name: 'TRL 2 \u2013 Technology concept formulated (business plan available)',
    description: null
  },
  {
    id: 'trl3',
    name: 'TRL 3 \u2013 Technology concept formulated (business plan available)',
    description: null
  }
];

const ProductAttributes = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [myTrlData, setMyTrlData] = useState([]);

  useEffect(() => {
    setCategoriesData(categories);
    setBusinessData(businessModels);
    setMyTrlData(myTrl);
  }, []);

  useEffect(() => {
    console.log(myTrlData);
  }, [myTrlData]);

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
      console.log(tempData);
      setMyTrlData(tempData);
    }
  };
  return (
    <div className={styles.wrapper}>
      <AttributeForm
        title="Categories"
        formName="categories"
        data={categoriesData}
        onAddClick={addCategoryData}
        onUpdateData={updateCategoryData}
      />
      <AttributeForm
        title="Business Model"
        formName="businessModels"
        isPrimary={true}
        data={businessData}
        onAddClick={addBusinessData}
        onUpdateData={updateBusinessData}
      />
      <AttributeForm
        title="Trl"
        formName="trl"
        data={myTrlData}
        isSelect={true}
        onUpdateSelectData={updateSelectData}
        onAddClick={addTrlData}
        selectSource={trlData}
      />
    </div>
  );
};

export default ProductAttributes;
