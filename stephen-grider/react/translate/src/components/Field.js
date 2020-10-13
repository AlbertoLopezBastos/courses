import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  renderName(language) {
    return language === 'english' ? 'Name' : 'Nombre'
  }

  render() {
    const text = this.context.language === 'english' ? 'Name' : 'Nombre';
    return (
      <div className="ui field">
        <label>
          {text}
        </label>
        <input />
      </div>
    )
  }
}

export default Field;