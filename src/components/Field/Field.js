import {
  View,
  TextInput
} from 'react-native';

import PropTypes from 'prop-types';

const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (text) => {
    onChange(text, name);
  };
  const inputId = `field-${name}`;
  return (
    <View>
      <TextInput
        required
        value={value}
        onChangeText={(text) => handleChange(text)}
        id={inputId}
        textContentType={type}
        placeholder={placeholder}
        name={name}
      />
    </View>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

Field.defaultProps = {
  value: '',
  type: '',
};

export default Field;