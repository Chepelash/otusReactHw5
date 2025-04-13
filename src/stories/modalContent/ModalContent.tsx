interface ModalContentProps {
  onClose: () => void;
}

export const ModalContent = ({ onClose }: ModalContentProps) => {
  return (
    <div>
      <p>I'm modal</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
