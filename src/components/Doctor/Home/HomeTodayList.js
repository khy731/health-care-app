import classes from "./HomeTodayList.module.css";

const HomeTodayList = ( {info} ) => {
    return(
        <div className={classes.listbox}>
          <div>
            <i className="fa-regular fa-user"></i>
            <span>&nbsp;&nbsp;&nbsp;{info.name}</span>
          </div>
            <span>{info.born}</span>
            <span>{info.phone}</span>
          <button className={classes.controlbutton}>환자 정보</button>
        </div>
    )
}

export default HomeTodayList;