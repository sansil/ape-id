
import profileImg from '../assets/profileImg.png'
import lensImg from '../assets/lens.png'

function ProfileCard () {
  return (
    <div class="flex flex-col rounded-lg  overflow-hidden max-w-xs blur-none bg-green-50 w-full shadow" >
      <div class="flex-shrink-0">
        <img class="h-72 w-full object-cover" src={profileImg} alt="" />
      </div>
      <button className='absolute border border-black rounded-lg shadow top-2 right-2 bg-green-50'>
        <img src={lensImg} className="w-8" alt="" />
      </button>
      <div className='px-6 py-3'>


        <div className='flex justify-between text-xl font-medium text-left text-gray-900'>

          <h2 className='flex items-center tracking-tight'>@sansil
            <svg className='w-3.5 ml-2' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_43_105)">
                <path d="M20 5.92417C19.2642 6.25084 18.4733 6.47084 17.6433 6.57C18.4908 6.0625 19.1417 5.25833 19.4475 4.3C18.655 4.77 17.7767 5.11167 16.8417 5.29583C16.0942 4.49833 15.0267 4 13.8467 4C11.1975 4 9.25083 6.47167 9.84917 9.0375C6.44 8.86667 3.41667 7.23334 1.3925 4.75083C0.3175 6.595 0.835 9.0075 2.66167 10.2292C1.99 10.2075 1.35667 10.0233 0.804167 9.71584C0.759167 11.6167 2.12167 13.395 4.095 13.7908C3.5175 13.9475 2.885 13.9842 2.24167 13.8608C2.76333 15.4908 4.27833 16.6767 6.075 16.71C4.35 18.0625 2.17667 18.6667 0 18.41C1.81583 19.5742 3.97333 20.2533 6.29 20.2533C13.9083 20.2533 18.2125 13.8192 17.9525 8.04834C18.7542 7.46917 19.45 6.74667 20 5.92417V5.92417Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_43_105">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-3.5 ml-1' viewBox="0 0 293.775 293.671">
              <g id="etherscan-logo-circle" transform="translate(-219.378 -213.33)">
                <path id="Path_1" data-name="Path 1" d="M280.433,353.152A12.45,12.45,0,0,1,292.941,340.7l20.737.068a12.467,12.467,0,0,1,12.467,12.467v78.414c2.336-.692,5.332-1.43,8.614-2.2a10.389,10.389,0,0,0,8.009-10.11V322.073a12.469,12.469,0,0,1,12.468-12.47h20.778a12.469,12.469,0,0,1,12.467,12.467v90.279s5.2-2.106,10.269-4.245a10.408,10.408,0,0,0,6.353-9.577V290.9a12.466,12.466,0,0,1,12.466-12.467h20.778A12.468,12.468,0,0,1,450.815,290.9v88.625c18.014-13.055,36.271-28.758,50.759-47.639a20.926,20.926,0,0,0,3.185-19.537,146.6,146.6,0,0,0-136.644-99.006c-81.439-1.094-148.744,65.385-148.736,146.834a146.371,146.371,0,0,0,19.5,73.45,18.56,18.56,0,0,0,17.707,9.173c3.931-.346,8.825-.835,14.643-1.518a10.383,10.383,0,0,0,9.209-10.306V353.152" fill="#21325b" />
                <path id="Path_2" data-name="Path 2" d="M244.417,398.641A146.808,146.808,0,0,0,477.589,279.9c0-3.381-.157-6.724-.383-10.049-53.642,80-152.686,117.4-232.79,128.793" transform="translate(35.564 80.269)" fill="#979695" />
              </g>
            </svg>
          </h2>
          <h2>
            82
          </h2>
        </div>

        <dl className='mt-4 space-y-1 text-sm text-gray-800 '>
          <div className='flex justify-between '>
            <dt>degen</dt>
            <dt>94</dt>
          </div>
          <div className='flex justify-between'>
            <dt>shitpost</dt>
            <dt>78</dt>
          </div>
          <div className='flex justify-between'>
            <dt>tech</dt>
            <dt>83</dt>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default ProfileCard;