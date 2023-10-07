import React, { useState, useRef, useEffect } from 'react'
import { ProjectModal } from '../components/ProjectModal'
import { ButtonSuccess } from "../components/ButtonSuccess"
import { Categories } from "../components/Categories"
import { ProjectContainer } from "../components/ProjectContainer"

export const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target) && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <Categories></Categories>

      <ButtonSuccess onClick={openModal} />

      {isModalOpen && (
        <>
          <div className="modal-background"></div>
          <div className="modal-overlay">
            <div className="modal-container" ref={modalRef}>
              <ProjectModal closeModal={closeModal} />
            </div>
          </div>
        </>
      )}
      <ProjectContainer></ProjectContainer>
    </>
  )
}
