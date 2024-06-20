import styles from './Filter.module.scss'

type TFilterProps = {
  filter: string
  onFilterChange: (value: string) => void
}

export default function Filter({ filter, onFilterChange }: TFilterProps) {
  return (
    <input
      className={styles.input}
      type='text'
      placeholder='Search by symbol'
      autoComplete='off'
      name='text'
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
    />
  )
}
