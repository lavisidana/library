            initialDropDown();
            $(document).on("click", "#resetButton", function(e){
                e.preventDefault();
                $("select").val('');
                $('option').removeAttr('disabled');
                initialDropDown();
            })
            $(document).on('click', '#goButton', function(e){
                e.preventDefault();
                var brand= $('select[name=brand]').val().toLowerCase();
                var model= $('select[name=model]').val().toLowerCase();
                var year = $('select[name=year]').val().toLowerCase();
                var color = $('select[name=color]').val().toLowerCase();
                alert("Selected Options are Folowing \n Brand : "+brand+"\n Model : "+model+"\n Year : "+year+"\n Color : "+color);
            })
            var previousbrand = previousmodel = previousyear = previouscolor = "";
            $(document).on("change", "select",function(){
                var brand = model = year = color = null;
                if($("select[name=brand]").val() !=""){
                    brand = $("select[name=brand]").val();
                    if(previousbrand !=brand && previousbrand != ""){
                        previousbrand = previousmodel = previousyear = previouscolor = "";
                        intialModelDropDown();
                        intialYearDropDown();
                        intialColorDropDown();
                    }
                    previousbrand = brand;
                }
                if($("select[name=model]").val() !=""){
                    model = $("select[name=model]").val();
                    if(previousmodel !=model && previousmodel != ""){
                        previousbrand = previousmodel = previousyear = previouscolor = "";
                        intialBrandsDropDown();
                        intialYearDropDown();
                        intialColorDropDown();
                    }
                    previousmodel = model;
                }
                if($("select[name=year]").val() !=""){
                    year = $("select[name=year]").val();
                    if(previousyear !=year && previousyear != ""){
                        previousbrand = previousmodel = previousyear = previouscolor = "";
                        intialBrandsDropDown();
                        intialModelDropDown();
                        intialColorDropDown();
                    }
                    previousyear = year;
                }
                if($("select[name=color]").val() !=""){
                    color = $("select[name=color]").val();
                    if(previouscolor !=color && previouscolor != ""){
                        previousbrand = previousmodel = previousyear = previouscolor = "";
                        intialBrandsDropDown();
                        intialModelDropDown();
                        intialYearDropDown();
                    }
                    previouscolor = color;
                }
                var data = {brand:brand, model:model, year:year, color:color,action:"coDependentDropDown"} ;
                if(brand == null || model == null || year == null || color == null){
                     $.ajax({
                    async: true,
                    url : 'ajax.php',
                    type : 'POST',
                    data : data,
                    success:function(responseText){
                        responseText = JSON.parse(responseText)
                        if(responseText !=null){
                            if(responseText.hasOwnProperty('brand') && responseText.brand !=null){
                                var htmloutput = '<option value="">Select Brand</option>' ;
                                var brandOptions = responseText.brand;
                                for(var brandoption of brandOptions){
                                    htmloutput += '<option value = '+brandoption['brand'].toLowerCase()+'">'+brandoption['brand']+'</option>';
                                }
                                $('select[name=brand]').html(htmloutput);
                            }
                            if(responseText.hasOwnProperty('model') && responseText.model !=null){
                                var htmloutput = '<option value="">Select Model</option>' ;
                                var modelOptions = responseText.model;
                                for(var modeloption of modelOptions){
                                    htmloutput += '<option value = '+modeloption['model'].toLowerCase()+'">'+modeloption['model']+'</option>';
                                }
                                $('select[name=model]').html(htmloutput);
                            }
                            if(responseText.hasOwnProperty('year') && responseText.year !=null){
                                var htmloutput = '<option value="">Select Year</option>' ;
                                var yearOptions = responseText.year;
                                for(var yearoption of yearOptions){
                                    htmloutput += '<option value = '+yearoption['year'].toLowerCase()+'">'+yearoption['year']+'</option>';
                                }
                                $('select[name=year]').html(htmloutput);
                            }
                            if(responseText.hasOwnProperty('color') && responseText.color !=null){
                                var htmloutput = '<option value="">Select Color</option>' ;
                                var colorOptions = responseText.color;
                                for(var coloroption of colorOptions){
                                    htmloutput += '<option value = '+coloroption['color'].toLowerCase()+'">'+coloroption['color']+'</option>';
                                }
                                $('select[name=color]').html(htmloutput);
                            }
                        }else if(responseText == null){
                            alert("Selected Criteria doesn't have any product available");
                        }},
                    error:function(responseText){alert("Error Occured " + responseText);return false;}
                });

                }

            })
