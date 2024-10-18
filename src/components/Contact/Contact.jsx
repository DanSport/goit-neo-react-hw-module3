import styles from "./Contact.module.css";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className={styles.contact}>
      <span>
        <b>{contact.name}</b> <br />
        {contact.number}
      </span>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;
