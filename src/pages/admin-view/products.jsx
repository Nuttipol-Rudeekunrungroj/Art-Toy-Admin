import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle,SheetDescription } from "@/components/ui/sheet"
import { Fragment, useEffect, useState } from "react"
import CommonForm from "@/components/common/form";
import { addProductFormElements } from "@/config";
import ProductImageUpload from "@/components/admin-view/image-upload";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, fetchAllProducts } from "@/store/admin/products-slice";
import { useToast } from "@/hooks/use-toast";


const initialFormData = {
  
  name: "",
  price: "",
  image: null,
  category: "",
  materials: "",
  product_type: "",
  description: "",
  
};

function AdminProducts() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [imageFile, setImageFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");
    const [imageLoadingState,setImageLoadingState] = useState(false);
    const {productList} = useSelector(state=>state.adminProducts);
    const dispatch = useDispatch ();
   const {toast} = useToast();

    
    function onSubmit(event) {
      event.preventDefault();
      dispatch(addNewProduct({
        ...formData,
        image : uploadedImageUrl
      })).then((data)=>{
        console.log(data, "edit");
        if(data?.payload?.success){
          dispatch(fetchAllProducts())
          setImageFile(null);
          setFormData(initialFormData)
          toast({
            title : 'product add successfuly'
          })
        }
      })
    
    }

    useEffect(()=>{
dispatch(fetchAllProducts())
    },[dispatch])

      console.log(productList,"productList");
  

    return <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>Add New Product

        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">


      </div>
      <Sheet open={openCreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false);}}>
            <SheetContent side="right" className="overflow-auto">
              <SheetHeader>
                <SheetTitle>Add New Product </SheetTitle>
                
<SheetDescription>Fill out the form below to add a new product</SheetDescription>


              </SheetHeader>
              <ProductImageUpload
              imageFile={imageFile}
              setImageFile={setImageFile}
              uploadedImageUrl={uploadedImageUrl}
              setUploadedImageUrl={setUploadedImageUrl}
              setImageLoadingState={setImageLoadingState}
              imageLoadingState={imageLoadingState}
              // currentEditedId={currentEditedId}
              // isEditMode={currentEditedId !== null}
              
              />

              <div className="py-6">
            <CommonForm
              formControls={addProductFormElements}
              formData={formData}
              setFormData={setFormData}
              buttonText={"Add"}
              onSubmit={onSubmit}
              // isBtnDisabled={!isFormValid()}
            />
          </div>
            </SheetContent>

      </Sheet>


    </Fragment>
  }
  
  export default AdminProducts