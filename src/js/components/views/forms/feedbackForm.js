'use strict';

import React, { Component } from 'react';
import siteConst from '../../../constants/siteConst';
import {isEmailValid} from '../../../utils/baseUtils';
import PopupForm from './popupForm';

// форма для обратной связи
export default class FeedbackForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			// имя
			name: siteConst.defaultInputsData.name,
			// имейл
			email: siteConst.defaultInputsData.email,
			// текст
			text: siteConst.defaultInputsData.text,
		};

		this.changeData = this.changeData.bind(this);
		this.clearData = this.clearData.bind(this);
		this.clickSendButton = this.clickSendButton.bind(this);
	}

	// ввод данных
	changeData(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    // по клику на инпуте он очищается
	clearData(event) {
		const name = event.target.name;

		if (name === 'text' && this.state.text !== siteConst.defaultInputsData.text) {
			return;
		} 

		this.setState({
            [name]: '',
        });
	}
	
	// отправить фидбэк
    clickSendButton(event) {
        debugger;
        let isDataValid = true;

        if (!this.state.name ||
            (this.state.name === siteConst.defaultInputsData.name)) {
				this.state.name = siteConst.defaultInputsData.name;
                isDataValid = false;
        }

        if (!this.state.email ||
            (this.state.email === siteConst.defaultInputsData.email) ||
            (this.state.email === siteConst.warningInputsData.email) ||
            !isEmailValid(this.state.email)) {
                this.state.email = siteConst.warningInputsData.email;
                isDataValid = false;
        }

        if (!this.state.text ||
            (this.state.text === siteConst.defaultInputsData.text)) {
				this.state.text = siteConst.defaultInputsData.text;
                isDataValid = false;
        }

        if (!isDataValid) {
            this.setState({});
            return true;
        }
        else {
            return this.props.doSendFeedback(this.state.name, this.state.email, this.state.text);
        }
	}

	render() {
		let className = 'feedback-form ' + (this.props.className ? this.props.className : '');

		const data = <div className = {className}>
						<div className = 'popup-form__title'>
							Обратная связь
						</div>

						<div className = 'popup-form__item'>
							<input 
								name = "name"
								type="text" 
								className = '' 
								maxLength = '40'
								value = {this.state.name}
								onChange = {this.changeData}
								onClick = {this.clearData}
							/>
						</div>

						<div className = 'popup-form__item'>
							<input 
								name = "email"
								type="text" 
								className = '' 
								maxLength = '40'
								value = {this.state.email}
								onChange = {this.changeData}
								onClick = {this.clearData}
							/>
						</div>

						<div className = 'popup-form__item'>
							<textarea
								name = "text"
								className = '' 
								maxLength = '30000'
								value = {this.state.text}
								onChange = {this.changeData}
								onClick = {this.clearData}
							/>
						</div>

						<div className = 'popup-form__buttons-block'>
							<button
								className = ''
								onClick = {this.clickSendButton}
							>
								Отправить
							</button>

							<button className = '' onClick = {this.props.hideFeedbackForm}>
								Закрыть
							</button>
						</div>
					</div>;

		return (
			<PopupForm
                data = {data}
				colorTheme = {this.props.colorTheme}
            />
		)
	}
}