import {
  View,
  TextInput
} from 'react-native';

import PropTypes from 'prop-types';

const Field = ({
  value,
  textContentType,
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
        style={{ marginBottom: 15, padding: 10, height: 40, backgroundColor: 'white' }}
        value={value}
        onChangeText={(text) => handleChange(text)}
        id={inputId}
        textContentType={textContentType}
        placeholder={placeholder}
        name={name}
      />
    </View>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  textContentType: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

Field.defaultProps = {
  value: '',
  type: '',
};

export default Field;