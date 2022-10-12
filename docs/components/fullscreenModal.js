// Full Screen Modal
import { Div, Button, Modal, Icon, Text } from "atomize";

const ModalSize = ({ isOpen, onClose }) => {
    
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      rounded="0"
      maxW="100vw"
      m="0"
      h="100vh"
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />

      <Text
        p={{ l: "0.5rem", t: "0.25rem" }}
        m={{ b: "2rem" }}
        h="calc(100vh - 10rem)"
      >
        This modal has maxW of 100vw
      </Text>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Close
        </Button>
        <Button onClick={onClose} bg="info700">
          OK
        </Button>
      </Div>
    </Modal>
  );
};

class FullScreenModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ r: "0.5rem" }}
          onClick={() =>
            this.setState({ showModal: true })
          }
        >
          Open Full Screen modal
        </Button>
        <ModalSize
          isOpen={showModal}
          onClose={() => this.setState({ showModal: false })}
        />
      </>
    );
  }
}

export default FullScreenModal;