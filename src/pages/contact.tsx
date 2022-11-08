import styles from  '../styles/components/Contact.module.scss';

const Contact = () => {
    return (
        <section className={styles.contact}>
            <section className={styles.contact_container}>
                <h2 className={styles.contact_container_title} >Contáctanos</h2>
                <form className={styles.contact_container_form}>
                    <input
                        name="name"
                        className={styles.contact_container_form_input}
                        type="text"
                        placeholder="Nombre completo"
                        required
                    />
                    <input
                        name="email"
                        className={styles.contact_container_form_input}
                        type="email"
                        placeholder="Correo"
                        required
                    />
                    <input
                        name="phone"
                        className={styles.contact_container_form_input}
                        type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                        placeholder="Celular (opcional)"
                    />
                    <textarea name="message"  className={styles.contact_container_form_message} rows={5} cols={25} placeholder="Déjanos un mensaje" required></textarea>
                    <button type="submit" className={styles.contact_container_form_button}>Enviar</button>
                </form>
            </section>
        </section>
    )
}

export default Contact
