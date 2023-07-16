import React from 'react';
import CustomButtom from './CustomButton';


const AiPicker = ({prompt, setPromot, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
          <textarea
          placeholder='Ask Ai...'
          rows={5}
          value={prompt}
          onChange={(e) => setPromot(e.target.value)}
          className='aipicker-textarea'
           />
          <div className='flex flex-wrap gap-3'>
            {generatingImg ? (
              <CustomButtom type="outline" title="Asking Ai..." customStyles="text-xs" />
            ) : (
              <>
              <CustomButtom
              type="outline"
              title="Ai Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
               />
                 <CustomButtom
              type="filled"
              title="Ai Full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
               />
              </>
            )}
            </div> 
    </div>
  )
}

export default AiPicker