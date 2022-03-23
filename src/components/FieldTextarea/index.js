import {
    View,
    TextInput
} from 'react-native';
  
  import PropTypes from 'prop-types';
  
  const FieldTextarea = ({
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
          style={{ marginBottom: 15, padding: 10, height: 80, backgroundColor: 'white' }}
          multiline={true}
          numberOfLines={4}
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
  
  FieldTextarea.propTypes = {
    value: PropTypes.string,
    textContentType: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };
  
  FieldTextarea.defaultProps = {
    value: '',
    type: '',
  };
  
  export default FieldTextarea;
  