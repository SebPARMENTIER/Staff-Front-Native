import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';

import PropTypes from 'prop-types';

import Field from '../Field/index.js';
import FieldTextarea from '../FieldTextarea/index.js';

const AddNewCardModal = ({
  title,
  description,
  changeField,
  handleAddNewCardModal,
  onClickEscapeAddNewCardModal,
  isAddNewCardModalError
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddNewCardModal();
  };

  const handleOnClickEscapeAddNewCardModal = () => {
    onClickEscapeAddNewCardModal();
  };
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.addNewCardModal}>
      <View style={styles.addNewCardModalContainer}>
        <Text style={styles.addNewCardModalContainerHeader}>
          Ajoutez une nouvelle carte
        </Text>
        <SafeAreaView style={styles.addNewCardModalContainerForm}>
          {!isAddNewCardModalError && (
            <View style={styles.addNewCardModalContainerFormField}>
              <Field
                name="title"
                placeholder="Nom de la carte..."
                value={title}
                onChange={changeField}
              />
              <FieldTextarea
                name="description"
                placeholder="Description de la carte..."
                value={description}
                onChange={changeField}
              />
            </View>
          )}
          {isAddNewCardModalError && (
            <>
              <Text style={styles.addNewCardModalContainerFormError}>
                Une erreur s'est produite, veuillez réessayer.
              </Text>
              <TouchableOpacity style={styles.addNewCardModalContainerFormButton}>
                <Text
                  style={styles.addNewCardModalContainerFormButtonsEscape}
                  onClick={handleOnClickEscapeAddNewCardModal}>
                  Annuler
                </Text>
              </TouchableOpacity>
            </>
          )}
          {!isAddNewCardModalError && (
            <>
              <View style={styles.addNewCardModalContainerFormButtons}>
                <TouchableOpacity
                  style={styles.addNewCardModalContainerFormButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.addNewCardModalContainerFormButtonsValidate}>
                    Valider
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.addNewCardModalContainerFormButton}
                  onPress={handleOnClickEscapeAddNewCardModal}
                >
                  <Text style={styles.addNewCardModalContainerFormButtonsEscape}>
                    Annuler
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  addNewCardModal: {
    width: width,
    height: height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: 'rgba(129, 125, 125, 0.7)'
  },
  addNewCardModalContainer: {
    backgroundColor: '#e1c699',
    width: '90%',
    maxHeight: '45%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  addNewCardModalContainerHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'saddlebrown',
    marginBottom: 30
  },
  addNewCardModalContainerForm: {
    width: '80%'
  },
  addNewCardModalContainerFormButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  addNewCardModalContainerFormButton: {
    backgroundColor: '#77b5fe',
    padding: 10,
    borderRadius: 10,
  }
});

AddNewCardModal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleAddNewCardModal: PropTypes.func.isRequired,
  onClickEscapeAddNewCardModal: PropTypes.func.isRequired,
  isAddNewCardModalError: PropTypes.bool.isRequired
};

AddNewCardModal.defaultProps = {
  title: '',
  description: ''
};

export default AddNewCardModal;
