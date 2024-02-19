import React, { ChangeEvent, useState } from "react";
import { StyledInputContainer, StyledLabelFile, StyledInvisibleInput, LabelTitle, LabelSubTitle, Icon } from './InputFile.styled';
import Image from 'next/image';
import upload from '@/../public/upload.svg';

interface InputProps {
  label: string;
}

const InputFile = (props: InputProps) => {
  const { label, ...rest } = props;
  const [file, setFile] = useState<File>();


  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  return (
    <StyledInputContainer>
      <StyledLabelFile htmlFor="uploadCV">
        {!file && <Icon>

          <Image src={upload} width={55} height={55} alt='upload' />
        </Icon>}
        {
          file ? (<LabelTitle>{file.name}</LabelTitle>) : (
            <>
              <LabelTitle>{label}</LabelTitle>
              <LabelSubTitle>( PDF or DOCX )</LabelSubTitle>
            </>
          )
        }
      </StyledLabelFile>
      <StyledInvisibleInput onChange={handleFileChange} type="file" id='uploadCV' accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
    </StyledInputContainer>
  )
}

export default InputFile;