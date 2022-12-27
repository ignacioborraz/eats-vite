import React, { useState } from 'react'

const Header = ({type,options}) => {
  const [nav, setNav] = useState(false)
  const handleMenu = () => setNav(!nav)

  return (
    <>
      {type==="nav" ?
        <img onClick={handleMenu} className='header-button' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAI9JREFUWEftllEKwCAMQ+PJtqPsJttuPvyeFJ4otJCCf1HrMwabklZL2pfcGL0ZEzMxSoDqS3rslHTQk07o39GciNgj6Z7YiE4Z9lCysUtSH7urW+ZXJc2/m1S4volR/BEx5xh9lWkD1jlGr5I+pKV65xjF6RwLiPk/Ru3k/xglNtQ7xyhGEzMxSoDq03rsA2K0DCfODRjvAAAAAElFTkSuQmCC" /> :
        <img onClick={handleMenu} className='header-button' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAb1JREFUWEftmIEtBFEQhr+rABWgAjpABagAHVABKkEFqAAVoAMlUAH5k13Z29t3O/PvuWwuJrmc5N7b+e5/82b+M2GkMRkpFysNtg8cAruV+p/AA/AI6G8rhii2DtwDAusKQZ1VkGk4F2wLeAUE1xeCu+1b1P7cBXsDdhLJDoDnxHqr+E+Bm0ySCkpw4XAUU2Gr2LOxDXxENzlgKuq1aILGutRxOmDfBpS2pC6BAzZaxXT1TwzVNjIN11FMDfUpCXYH6DaHwwHTwzM386saV+EbqQQumDq+GmZfkxWUFFZDToULVie5Ai4LGV+AcwdqiGJNFql3BGh+1qGjTqvUfOhQxVLHk1m8smAyh/PG03umdw05St0wNVe9N2uq75RUc3qpn4UiepSCkNUpudVQsspdXERcbQRMMLLQEbcaBdRY01AvRh+YM34WAjcPLOProzDtddeAmvRMzAPTyNlzMyb2dTrbEthfHmGbudN5lMBcz5UQ6nepjKe82lSUwGRRNp0s5p7jdgspgbm+3uRi5hJ0gWnM6Ff2MiMEtszCr798CEz9K+XPFyCtWtPUvxD6Ov8CcnqP+AfL6jZaxX4Av05CJyhsS4sAAAAASUVORK5CYII=" />
      }
      {
        nav
          ? (
            <div className={`header-options-${type}`}>
              {options.map(option => <a href="" className='header-options'>{option.name}</a> )}
            </div>
          )
          : null
      }
    </>
  )
}

export default Header