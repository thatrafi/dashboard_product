import styles from './Select.module.scss';

const Select = (props) => {
  const { selected, source, name, onChange } = props;
  let currentValue = selected || 'DEFAULT';
  return (
    <select name={name} className={styles.select} onChange={onChange} defaultValue={currentValue}>
      <option value="DEFAULT" disabled>
        Choose a {name || 'Data'} ...
      </option>
      {source &&
        source.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      ;
    </select>
  );
};

export default Select;
