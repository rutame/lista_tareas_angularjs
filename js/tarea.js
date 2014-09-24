function modeloTareas($scope){
	 
	 $scope.getFecha = function(){
		  var fecha = new Date();
		  
		  return fecha;
	 }
    /*
    $scope.tareas = [
                    {text:'Aprender AngularJS',fecha:'06/07/2014', done:false},
                    {text:'Hacer una aplicación',fecha:'06/07/2014', done:false},
                    {text:'Otra cosa mariposa',fecha:'06/07/2014', done:false}
    ]; */
    $scope.tareas = [];
    $scope.getTotalTareas = function(){
        return $scope.tareas.length;
    }

    $scope.getPendientes = function(){
      $va = $scope.tareas.length;
		return $va;
    }

// Método que agrega tareas siempre y cuando no esté vacio el campo    
    $scope.addTareas = function(){
        
        if($scope.formTareaText){
        $scope.tareas.push({text:$scope.formTareaText, fecha:$scope.getFecha(), done:false});
        $scope.formTareaText = '';   
        }
        
    }

// Método que borra las tareas marcadas como hechas
    $scope.delTareas = function(){
        $scope.tareas = _.filter($scope.tareas, function(tareas){
        return !tareas.done;
        })
    }
}