var hashHistory = window.ReactRouter.hashHistory;

var Option = ({newQuestion, text, changeQuestion, loadTechies, ajaxCall}) => (
  <li onClick={function(){
    if(newQuestion === 'iHaveTech') {
      hashHistory.push('/login');
    } else {
      ajaxCall ? loadTechies(newQuestion) : changeQuestion(newQuestion)
    }
  }}>{text}</li>
);
window.Option = Option;