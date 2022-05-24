import React from "react"
import mcss from './header.module.css'

const Header = () => {
	return (
		<div className={mcss.header}>
			<img className={mcss.logo} src="https://png2.cleanpng.com/sh/ee15f90e78cfdc73f0e50e6341f579cb/L0KzQYm4UcA4N5RnhJH0aYP2gLBuTfJidpJmhts2aXzvhcT7kvF1cZDzRdV1aYCwccP7TgRmgKUye9H2cIX3dcO0ifNwdqQyTdRuM0XmSIm4hMVjQGUzSKM9MkS0RIi4VcQyPmM8SKMBMUKzQ3B3jvc=/kisspng-banaani-illustration-clip-art-text-computer-icons-5be35c881d5b84.0142414715416270161203.png" alt="coverImage"/>
			<span className={mcss.name}>Bananas Network</span>
		</div>
	)
}

export default Header 