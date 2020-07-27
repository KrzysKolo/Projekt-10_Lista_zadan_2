export default title => {
    return '<div class="input-group ">'+
                    '<span class="input-group-btn">'+
                    '<button class="btn btn-default toggle-complete-btn"><i class="fa fa-check"></i></button>'+
                   ' </span>'+
                    '<input type="text" class="form-control" placeholder="Tytuł zadania" value="'+ title +'">'+
                    '<span class="input-group-btn">'+
                        '<button class="btn btn-danger delete-task-btn" ><i class="fa fa-times"></i></button>'+
                    '</span>'+
                '</div>' ;
}