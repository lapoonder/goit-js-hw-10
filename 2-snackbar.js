import{e as n}from"./assets/error-1YRp-oh5.js";/* empty css                      */import{i as o}from"./assets/vendor-BbbuE1sJ.js";const m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEwSURBVHgBrZWBjcIwDEWTDbrBZYNjhG5wHaEbXDdoN0k3uGMC2AAxQdgANjCO+KFRSNwGYemrwo6f4zYxWhWMiBp+9KxvloH7xtqzjlrri6oxBhqWpcUc6wBdI79F8TR/l4O2SPaafJFC4RkFTRIbUXQXOzs4Tznghk4DdEp34aDmI1AELAJGVZoENeFjqEorQhHs091mv2wNFAv+/CmIoUgY34Zi0cEr8U0leAnKv39ZgwguwaWdvnAIh13lu3nC19qnx6X6jx0DEr5W4BI0nKw+djZSUgQfhLhNT1YIzGjFqEoj6R4g6MF+Tmy+0ujWUWYgxYtaVHZbdo7NnJDTrS3uACa8N1MAjrSM11ZtMVrmbbArLYPeRX4rdaalAvxoWT+s8N4vrDNr5r+mmxLsDpQiRtiOoB5DAAAAAElFTkSuQmCC";o.settings({timeout:5e3,resetOnHover:!0,icon:"material-icons",animateInside:!1,transitionIn:"fadeIn",transitionOut:"fadeOut",position:"topRight",titleColor:"#fff",titleLineHeight:"24",backgroundColor:"#ef4040",progressBarColor:"#b51b1b",messageColor:"#fff",messageSize:"16",messageLineHeight:"24"});let s,A;const t=document.querySelector(".form"),l=document.querySelector("button");l.addEventListener("click",c);const g=(e,r)=>new Promise((i,a)=>{setTimeout(()=>{r=="rejected"&&a(`Rejected promise in ${e}ms`),i(`Fulfilled promise in ${e}ms`)},e)});function c(e){e.preventDefault(),s=t.elements.delay.value,A=t.elements.state.value,g(s,A).then(r=>f(r)).catch(r=>u(r)),t.reset()}function u(e){o.error({class:"error_message",title:"Error",iconUrl:`${n}`,message:e})}function f(e){o.success({class:"ok_message",backgroundColor:"#59A10D",progressBarColor:"#326101",title:"OK",iconUrl:`${m}`,message:e})}
//# sourceMappingURL=2-snackbar.js.map