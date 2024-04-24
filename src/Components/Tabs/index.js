import './index.css'

const Tabs = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {id, buttonText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="item">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Tabs
