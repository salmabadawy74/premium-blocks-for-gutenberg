const Icons = {
    row: {
        twocol: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="39" viewBox="0 0 66 39"><path d="M0,0V39H66V0ZM2,37V2H32V37Zm62,0H34V2H64Z" /></svg>,
        twoleftgolden: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="39" viewBox="0 0 66 39"><path d="M0,0V39H66V0ZM2,37V2H41V37Zm62,0H43V2H64Z" /></svg>,
        tworightgolden: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="39" viewBox="0 0 66 39"><path d="M0,0V39H66V0ZM2,37V2H23V37Zm62,0H25V2H64Z" /></svg>,
        threecol: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="39" viewBox="0 0 66 39"><path d="M0,0V39H65V0ZM2,37V2H21V37Zm40,0H23V2H42Zm21,0H44V2H63Z" /></svg>,
        lefthalf: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="39" viewBox="0 0 66 39"><path d="M0,0V39H66V0ZM2,37V2H32V37Zm32,0V2H48V37Zm30,0H50V2H64Z" /></svg>,
        righthalf: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="39" viewBox="0 0 66 39"><path d="M0,0V39H66V0ZM16,37H2V2H16Zm16,0H18V2H32Zm32,0H34V2H64Z" /></svg>,
        centerhalf: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="39" viewBox="0 0 66 39"><path d="M0,0V39H66V0ZM2,37V2H16V37Zm16,0V2H48V37Zm46,0H50V2H64Z" /></svg>,
        widecenter: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="39" viewBox="0 0 66 39"><path d="M0,0V39H66V0ZM2,37V2H13V37Zm49,0H15V2H51Zm13,0H53V2H64Z" /></svg>,
        fourcol: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="39" viewBox="0 0 66 39"><path d="M0,0V39H66V0ZM2,37V2H16V37Zm16,0V2H32V37Zm16,0V2H48V37Zm30,0H50V2H64Z" /></svg>,
        lfourforty: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="39" viewBox="0 0 66 39"><path d="M0,0V39H66V0ZM2,37V2H28V37Zm28,0V2H40V37Zm12,0V2H52V37Zm22,0H54V2H64Z" /></svg>,
        cfourforty: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="39" viewBox="0 0 66 39"><path d="M0,0V39H66V0ZM2,37V2H12V37Zm12,0V2H32V37Zm20,0V2H52V37Zm30,0H54V2H64Z" /></svg>,
        rfourforty: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="39" viewBox="0 0 66 39"><path d="M0,0V39H66V0ZM2,37V2H12V37Zm12,0V2H24V37Zm12,0V2H36V37Zm38,0H38V2H64Z" /></svg>,
        fivecol: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="39" viewBox="0 0 66 39"><path d="M0,0V39H67V0ZM2,37V2H13V37Zm24,0H15V2H26Zm13,0H28V2H39Zm13,0H41V2H52Zm13,0H54V2H65Z" /></svg>,
        lfiveforty: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="39" viewBox="0 0 66 39"><path d="M0,0V39H66V0ZM2,37V2H20V37Zm20,0V2h9V37Zm11,0V2h9V37Zm11,0V2h9V37Zm20,0H55V2h9Z" /></svg>,
        cfiveforty: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="39" viewBox="0 0 66 39"><path d="M0,0V39H66V0ZM2,37V2h8V37Zm10,0V2h8V37Zm10,0V2H44V37Zm24,0V2h8V37Zm18,0H56V2h8Z" /></svg>,
        rfiveforty: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="39" viewBox="0 0 66 39"><path d="M0,0V39H66V0ZM2,37V2h9V37Zm20,0H13V2h9Zm11,0H24V2h9Zm11,0H35V2h9Zm20,0H46V2H64Z" /></svg>,
        collapserowthree: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="38" viewBox="0 0 66 38"><path d="M13,15V53H79V15ZM77,51H15V41H77Zm0-12H15V29H77Zm0-12H15V17H77Z" transform="translate(-13 -15)" /></svg>,
        collapserowfour: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="38" viewBox="0 0 66 38"><path d="M13,15V53H79V15ZM77,51H15V44H77Zm0-9H15V35H77Zm0-9H15V26H77Zm0-9H15V17H77Z" transform="translate(-13 -15)" /></svg>,
        collapserowfive: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="37" viewBox="0 0 66 37"><path d="M13,15V52H79V15ZM77,50H15V45H77Zm0-7H15V38H77Zm0-7H15V31H77Zm0-7H15V24H77Zm0-7H15V17H77Z" transform="translate(-13 -15)" /></svg>,
        grid: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="38" viewBox="0 0 66 38"><path d="M13,15V53H79V15ZM45,51H15V35H45Zm0-18H15V17H45ZM77,51H47V35H77Zm0-18H47V17H77Z" transform="translate(-13 -15)" /></svg>,
        collapserow: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="38" viewBox="0 0 66 38"><path d="M13,15V53H79V15ZM77,51H15V35H77Zm0-18H15V17H77Z" transform="translate(-13 -15)" /></svg>,
        lastrow: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="38" viewBox="0 0 66 38"><path d="M13,15V53H79V15Zm2,2H32V33H15ZM77,51H15V35H77Zm0-18H34V17H77Z" transform="translate(-13 -15)" /></svg>,
        row: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="39" viewBox="0 0 66 39"><path d="M77,16V51H15V16H77m2-2H13V53H79V14Z" transform="translate(-13 -14)" /></svg>,
        firstrow: <svg xmlns="http://www.w3.org/2000/svg" width="66" height="38" viewBox="0 0 66 38"><path d="M13,15V53H79V15ZM45,51H15V35H45Zm32,0H47V35H77Zm0-18H15V17H77Z" transform="translate(-13 -15)" /></svg>,
    }
}

export default Icons;