import { useModalStore } from "../../../../stores/ui/modal.store";
import styles from "./CreateUserForm.module.css";

type Props = {
  onSuccess: () => void;
};

export default function CreateUserForm({ onSuccess }: Props) {

  const closeModal = useModalStore((state) => state.closeModal);
   const modalData = useModalStore(state=> state.modalData)
    if (!modalData) return null
    const user = modalData
  const handleSubmit = () => {
    onSuccess();
  };
  return (
    <div>
      <form>
        <div className={styles.info}>
          <label>
            Nome
            <input value={user?.name || ""} disabled />
          </label>

          <label>
            Email
            <input value={user?.email || ""} disabled />
          </label>

          <label>
            Data Nascimento
            <input
              value={
                user?.dataNascimento
                  ? new Date(user.dataNascimento).toLocaleDateString("pt-BR")
                  : "00/00/0000"
              }
              disabled
            />
          </label>
        </div>
        <button type="submit">Salvar</button>
      </form>

      <button onClick={closeModal}>Fechar</button>
    </div>
  );
}
