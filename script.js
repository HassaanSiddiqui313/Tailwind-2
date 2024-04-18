function sidebar() {
    // var for ul
    let navcss=document.getElementById("navlist")

    // var for svg
    let e=document.getElementById('sidebar');

    // var to save the attribute
    let currentpath = e.getAttribute("d");

    if (currentpath === "M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z") {
        e.setAttribute("d" , "M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z")
        // navcss.classList.remove("top-[-100%]")
        // navcss.classList.add("top-[0%]")
        navcss.classList.replace("top-[-100%]","top-[0%]")
    } else {
        e.setAttribute("d" , "M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z")
        // navcss.classList.add("top-[-100%]")
        // navcss.classList.remove("top-[0%]")
        navcss.classList.replace("top-[0%]","top-[-100%]")
    }
}