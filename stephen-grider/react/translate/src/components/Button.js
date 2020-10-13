import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {
  // recibo el contexto para tener acceso a this.context
  // static contextType = LanguageContext;

  renderSubmit(language) {
    console.log(language)
    return language === 'english' ? 'Submit' : 'Aceptar'
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    // const text = this.context === 'english' ? 'Submit' : 'Aceptar';
    // o uso un consumer en vez de this.context
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

export default Button;