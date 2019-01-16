$(function() {
    $("#container").twentytwenty();

    var tribute = new Tribute({
        values: [
            {key: "Khanh Luu", value: "khanh_luu"}, 
            {key: "Nhi Nguyen", value: "map_dit"}
        ]
    }); 
    tribute.attach(document.getElementById("input-name"));
})