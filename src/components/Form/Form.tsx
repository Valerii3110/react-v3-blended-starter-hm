import { useState, type FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

interface FormProps {
  onSubmit: (query: string) => void;
}

export const Form = ({ onSubmit }: FormProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSubmit(query.trim());
    setQuery('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
      />
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
};
