import './index.css'

const LonguageItem = props => {
  const {longuageDetails} = props
  const {imageUrl, imgaeAltText} = longuageDetails
  return (
    <>
      <li className="icon">
        <img className="img" src={imageUrl} alt={`${imgaeAltText}`} />
      </li>
    </>
  )
}
export default LonguageItem
