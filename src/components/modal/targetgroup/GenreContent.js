import CheckBox from "../../smallcomponent/CheckBox"


const GenreContent = () => {
  return (
    <div className="GenreContent">
        <div className="row">
            <CheckBox text1={"Välj Alla"}/>
        </div>
        <div className="row">
            <CheckBox text1={"SVT1"}/>
            <CheckBox text1={"SVT2"}/>
            <CheckBox text1={"TV3"}/>
            <CheckBox text1={"TV4"}/>
            <CheckBox text1={"TV5"}/>
        </div>
    </div>
  );
};

export default GenreContent;