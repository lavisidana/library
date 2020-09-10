function intialBrandsDropDown(){
                $('select[name=brand]').html('<option value="">Select Brand </option><?php foreach($brands as $i=>$brand): ?><option value="<?php echo '&vid=' . $brand['vendorid'] ; ?>"><?php echo $brand['name']; ?> </option><?php endforeach; ?>');
            }
            function intialCollectionDropDown(){
                $('select[name=collection]').html('<option value="">Select Collection </option><option value="" disabled>Please Select Brand First</option>');
            }
            function intialCategoryDropDown(){
                $('select[name=style]').html('<option value="">Select Category </option><?php foreach($categoriesData as $i=>$color): ?><option value="<?php echo '&catid=' . $color['catid'] ; ?>"><?php echo $color['category']; ?> </option><?php endforeach; ?>');
            }
            function intialColorDropDown(){
                $('select[name=color]').html('<option value="">Select Color</option><?php foreach($colorData as $i=>$color): ?> <option value="<?php echo '&color=' . strtolower($color['color']) ; ?>"><?php echo $color['color']; ?> </option><?php endforeach; ?>');
            }
            function intialSizeDropDown(){
                $('select[name=size]').html("<option value=''>Select Size</option><?php foreach($sizeData as $i=>$size): $sizeCode = strtolower(urlencode($size["grpsize"])); if($size["grpsize"]=="2' x 8'") $afterText = " Runners"; elseif($size["grpsize"]=="2' x 10'") $afterText = " and Larger"; elseif($size["grpsize"]=="10' x 13'") $afterText = " and Larger"; else $afterText = " "; ?> <option value=\"<?php echo '&size='. $sizeCode ; ?>\">Around <?php echo $size['grpsize'].$afterText; ?> </option> <?php endforeach; ?>");
            }
            function intialShapeDropDown(){
                $('select[name=shape]').html('<option value="">Select Shape</option><?php foreach($shapeData as $i=>$shape): ?><option value="&shape=<?php echo strtolower($shape['value']);   ?>"><?php echo $shape['value'];   ?></option><?php endforeach; ?>');
            }
            function initialDropDown(){
                previousbrand = previouscollection = previouscategory = previouscolor = previoussize = previousshape = "";
                intialBrandsDropDown();
                intialCollectionDropDown();
                intialCategoryDropDown();
                intialColorDropDown();
                intialSizeDropDown();
                intialShapeDropDown();
            }
            initialDropDown();
            $(document).on("click", "#resetButton", function(e){
                e.preventDefault();
                $("select.select_shop").val('');
                $('option').removeAttr('disabled');
                initialDropDown();
            })
            $(document).on('click', '#goButton', function(e){
                e.preventDefault();
                var brand = collection = category = color = size = shape = '';
                var searchTerm = "DDs: "
                searchTerm += $('select[name=brand] option:selected').text();
                searchTerm += "+";
                searchTerm += $('select[name=collection] option:selected').text();
                searchTerm += "+";
                searchTerm += $('select[name=style] option:selected').text();
                searchTerm += "+";
                searchTerm += $('select[name=color] option:selected').text();
                searchTerm += "+";
                searchTerm += $('select[name=size] option:selected').text();
                searchTerm += "+";
                searchTerm += $('select[name=shape] option:selected').text();
                var data = {searchTerm:searchTerm, ptid:1, fx:"userSelectedDropDown"} ;
                $.ajax({
                    async: true,
                    url : '/ajaxCall/ajax-execution.php',
                    type : 'POST',
                    data : data,
                    success:function(responseText){
                var brand= $('select[name=brand] option:selected').val().toLowerCase();
                var collection= $('select[name=collection] option:selected').val().toLowerCase();
                var style = $('select[name=style] option:selected').val().toLowerCase();
                var color = $('select[name=color] option:selected').val().toLowerCase();
                var size = $('select[name=size] option:selected').val().toLowerCase();
                var shape = $('select[name=shape] option:selected').val().toLowerCase();
                url = "<?php echo ROOT_URL ?>/category.php/?&pcatid=1"+brand+collection+style+color+size+shape;
                window.location.replace(url);
                },
                    error:function(responseText){jAlert("Error Occured " + responseText);return false;}
                });
            })
            var previousbrand = previouscollection = previouscategory = previouscolor = previoussize = previousshape = "";
            $(document).on("change", ".select_shop",function(){
                var parent = $(this).closest('section').attr('id');
                parent = "#"+parent;
                var brand = collection = category = color = size = shape = null;
                if($(parent+" select[name='brand']").val() !=""){
                    brand = $(parent+" select[name='brand']").val();
                    brand = brand.split("=");
                    brand = brand[1];
                    if(previousbrand !=brand && previousbrand != ""){
                        previousbrand = previouscollection = previouscategory = previouscolor = previoussize = previousshape = "";
                        intialCollectionDropDown();
                        intialCategoryDropDown();
                        intialColorDropDown();
                        intialSizeDropDown();
                        intialShapeDropDown();
                    }
                    previousbrand = brand;
                }
                if($(parent+" select[name='collection']").val() !=""){
                    collection = $(parent+" select[name='collection']").val();
                    collection = collection.split("=");
                    collection = collection[1];
                    if(previouscollection !=collection && previouscollection != ""){
                        previousbrand = previouscollection = previouscategory = previouscolor = previoussize = previousshape = "";
                        intialBrandsDropDown();
                        intialCollectionDropDown();
                        intialColorDropDown();
                        intialSizeDropDown();
                        intialShapeDropDown();
                    }
                    previouscollection = collection;
                }
                if($(parent+" select[name='style']").val() !=""){
                    category = $(parent+" select[name='style']").val();
                    category = category.split("=");
                    category = category[1];
                    if(previouscategory !=category && previouscategory != ""){
                        previousbrand = previouscollection = previouscategory = previouscolor = previoussize = previousshape = "";
                        intialBrandsDropDown();
                        intialCollectionDropDown();
                        intialColorDropDown();
                        intialSizeDropDown();
                        intialShapeDropDown();
                    }
                    previouscategory = category;
                }
                if($(parent+" select[name='color']").val() !=""){
                    color = $(parent+" select[name='color']").val();
                    color = color.split("=");
                    color = color[1];
                    if(previouscolor !=color && previouscolor != ""){
                        previousbrand = previouscollection = previouscategory = previouscolor = previoussize = previousshape = "";
                        intialBrandsDropDown();
                        intialCollectionDropDown();
                        intialCategoryDropDown();
                        intialSizeDropDown();
                        intialShapeDropDown();
                    }
                    previouscolor = color;
                }
                if($(parent+" select[name='size']").val() !=""){
                    size = $(parent+" select[name='size']").val();
                    size = size.split("=");
                    size = size[1];
                    if(previoussize !=size && previoussize != ""){
                        previousbrand = previouscollection = previouscategory = previouscolor = previoussize = previousshape = "";
                        intialBrandsDropDown();
                        intialCollectionDropDown();
                        intialCategoryDropDown();
                        intialColorDropDown();
                        intialSizeDropDown();
                        intialShapeDropDown();
                    }
                    previoussize = size;
                }
                if($(parent+" select[name='shape']").val() !=""){
                    shape = $(parent+" select[name='shape']").val();
                    shape = shape.split("=");
                    shape = shape[1];
                    if(previousshape !=shape && previousshape != ""){
                        previousbrand = previouscollection = previouscategory = previouscolor = previoussize = previousshape = "";
                        intialBrandsDropDown();
                        intialCollectionDropDown();
                        intialCategoryDropDown();
                        intialColorDropDown();
                        intialSizeDropDown();
                        intialShapeDropDown();
                    }
                    previousshape = shape;
                }
                var data = {brand:brand, collection:collection, category:category, shape:shape, color:color, size:size, fx:"getSelectDropdownMenu"} ;
                $.ajax({
                    async: true,
                    url : '/ajaxCall/ajax-execution.php',
                    type : 'POST',
                    data : data,
                    success:function(responseText){
                        responseText = JSON.parse(responseText)
                        if(responseText !=null){
                            if(responseText.hasOwnProperty('brand') && responseText.brand !=null){
                                intialBrandsDropDown();
                                ajaxbrandValues = responseText.brand;
                                brandoptions = document.querySelectorAll('select[name=brand] option');
                                for(var brandoption of brandoptions){
                                    brandValue = brandoption.getAttribute('value');
                                    brandValue = brandValue.split("=");
                                    brandValue = brandValue[1];
                                    for(var ajaxbrandValue of ajaxbrandValues){
                                        ajaxmatchbrand = ajaxbrandValue['vendorid'];
                                        if(brandValue == ajaxmatchbrand){
                                            matchedStatus = true;
                                            break;
                                        }else{
                                            matchedStatus = false;
                                        }
                                    }
                                    if(matchedStatus == false && brandValue !="" && brandValue !=null){
                                        brandoption.disabled = true;
                                    }
                                }
                            }
                            if(responseText.hasOwnProperty('collection') && responseText.collection !=null){
                                intialCollectionDropDown();
                                ajaxcollectionValues = responseText.collection;
                                htmloutput = '<option value="">Select Collection</option>';
                                    for(var ajaxcollectionValue of ajaxcollectionValues){
                                        htmloutput += '<option value="&collec='+encodeURIComponent(ajaxcollectionValue['collection']).toLowerCase()+'">'+ajaxcollectionValue['collection']+'</option>';
                                    }
                                    $('select[name=collection]').html(htmloutput);
                                }
                            if(responseText.hasOwnProperty('category') && responseText.category !=null){
                                intialCategoryDropDown();
                                ajaxcategoryValues = responseText.category;
                                categoryoptions = document.querySelectorAll('select[name=style] option');
                                for(var categoryoption of categoryoptions){
                                    categoryValue = categoryoption.getAttribute('value');
                                    categoryValue = categoryValue.split("=");
                                    categoryValue = categoryValue[1];
                                    for(var ajaxcategoryValue of ajaxcategoryValues){
                                        ajaxmatchCategory = ajaxcategoryValue['value'];
                                        if(categoryValue == ajaxmatchCategory){
                                            matchedStatus = true;
                                            break;
                                        }else{
                                            matchedStatus = false;
                                        }
                                    }
                                    if(matchedStatus == false && categoryValue !="" && categoryValue !=null){
                                        categoryoption.disabled = true;
                                    }
                                }
                            }
                            if(responseText.hasOwnProperty('color') && responseText.color !=null){
                                intialColorDropDown();
                                ajaxcolorValues = responseText.color;
                                coloroptions = document.querySelectorAll('select[name=color] option');
                                for(var coloroption of coloroptions){
                                    colorValue = coloroption.getAttribute('value');
                                    colorValue = colorValue.split("=");
                                    colorValue = colorValue[1];
                                    for(var ajaxcolorValue of ajaxcolorValues){
                                        ajaxmatchcolor = ajaxcolorValue['value'].toLowerCase();
                                        if(colorValue == ajaxmatchcolor){
                                            matchedStatus = true;
                                            break;
                                        }else{
                                            matchedStatus = false;
                                        }
                                    }
                                    if(matchedStatus == false && colorValue !="" && colorValue !=null){
                                        coloroption.disabled = true;
                                    }
                                }
                            }
                            if(responseText.hasOwnProperty('size') && responseText.size !=null){
                                intialSizeDropDown();
                                ajaxsizeValues = responseText.size;
                                sizeoptions = document.querySelectorAll('select[name=size] option');
                                for(var sizeoption of sizeoptions){
                                    sizeValue = sizeoption.getAttribute('value');
                                    sizeValue = sizeValue.split("=");
                                    sizeValue = sizeValue[1];
                                    sizeValue = decodeURIComponent(sizeValue).replace("+", " ");
                                    sizeValue = sizeValue.replace("+", " ");
                                    for(var ajaxsizeValue of ajaxsizeValues){
                                        ajaxmatchsize = ajaxsizeValue['value'].toLowerCase();
                                        if(sizeValue == ajaxmatchsize){
                                            matchedStatus = true;
                                            break;
                                        }else{
                                            matchedStatus = false;
                                        }
                                    }
                                    sizeValue = sizeoption.getAttribute('value');
                                    if(matchedStatus == false && sizeValue !="" && sizeValue !=null && sizeValue != undefined){
                                        sizeoption.disabled = true;
                                    }
                                }
                            }
                            if(responseText.hasOwnProperty('shape') && responseText.shape !=null){
                                intialShapeDropDown();
                                ajaxshapeValues = responseText.shape;
                                shapeoptions = document.querySelectorAll('select[name=shape] option');
                                for(var shapeoption of shapeoptions){
                                    shapeValue = shapeoption.getAttribute('value');
                                    shapeValue = shapeValue.split("=");
                                    shapeValue = shapeValue[1];
                                    for(var ajaxshapeValue of ajaxshapeValues){
                                        ajaxmatchshape = ajaxshapeValue['value'].toLowerCase();
                                        if(shapeValue == ajaxmatchshape){
                                            matchedStatus = true;
                                            break;
                                        }else{
                                            matchedStatus = false;
                                        }
                                    }
                                    if(matchedStatus == false && shapeValue !="" && shapeValue !=null){
                                        shapeoption.disabled = true;
                                    }
                                }
                            }
                        }else if(responseText == null){
                            alert("Selected Criteria doesn't have any product available");
                        }},
                    error:function(responseText){jAlert("Error Occured " + responseText);return false;}
                });
            })
