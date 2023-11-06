function loadInit() {
    console.log(`index.js loaded!`);
    $('.nav-link').click(function (e) {  
        //get selected href
        var href = $(this).attr('href');    
        // console.log(`${href} nav clicked!`);
        
        //Fade
        $(`.buttonBox`).removeClass(`d-flex`);
        $(`.buttonBox`).removeClass(`show`);
        $(`.buttonBox`).removeClass(`active`);


        //Add Classes to element selected by href id
        $(`${href}-Btns`).addClass(`d-flex`);
        $(`${href}-Btns`).addClass(`show`);
        $(`${href}-Btns`).addClass(`active`);


        // $(`${href}-Btns a`).click((e) => {
        //     console.log(this)
        // })
    });
};
function underConstruction() {
    alert(`This project is under construction and not yet available for preview or download.`);
}
