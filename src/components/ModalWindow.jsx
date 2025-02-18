import React, { useState, useEffect } from "react";
import { Modal } from "antd";

const ModalWindow = ({ active, dataPerson }) => {
  const [isModalOpen, setIsModalOpen] = useState(active);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(active);
  }, [active]);

  const obj = JSON.stringify(dataPerson);

  return (
    <Modal
      title="Вы успешно зарегестрированы!"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p className="p">{obj}</p>
    </Modal>
  );
};

export { ModalWindow };
