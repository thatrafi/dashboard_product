import Input from 'components/input';
import Select from 'components/select';
import React from 'react';
import styles from './AttributeForm.module.scss';

// eslint-disable-next-line react/display-name
const AttributeForm = React.forwardRef((props, ref) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h5>{props.title || 'Title'}</h5>
        <i className="fa fa-plus" onClick={props.onAddClick}></i>
      </div>
      <form id="inputData" ref={ref}>
        {!props.isSelect &&
          props.data &&
          props.data.map((att) => (
            <Input
              key={att.id}
              name={`${props.formName}[]`}
              value={`${att.name}`}
              placeholder={`Enter new ${props.formName}`}
              onChange={(e) => props.onUpdateData(att.id, e.target.value)}
              className={`rounded ${props.isPrimary ? 'primary' : 'secondary'}`}
            />
          ))}
        {props.isSelect &&
          props.data &&
          props.data.map((att, idx) => (
            <Select
              selected={att.id}
              name={props.formName}
              source={props.selectSource}
              key={idx}
              onChange={(e) => props.onUpdateSelectData(idx, e.target.value)}
            />
          ))}
      </form>
    </div>
  );
});

export default AttributeForm;
