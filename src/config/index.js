export const registerFormControls = [
    {
      name: "userName",
      label: "User Name",
      placeholder: "Enter your user name",
      componentType: "input",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
  ];

  export const loginFormControls = [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
  ];

  export const addProductFormElements = [
    {
      label: "Name",
      name: "name",
      componentType: "input",
      type: "text",
      placeholder: "Enter product name",
    },
    {
      label: "Price",
      name: "price",
      componentType: "input",
      type: "number",
      placeholder: "Enter product price",
    },
    
    {
      label: "Category",
      name: "category",
      componentType: "select",
      options: [
        { id: "Art Toy", label: "Art Toy" },
        { id: "Hero", label: "Hero" },
      ],
    },
    {
      label: "Materials",
      name: "materials",
      componentType: "select",
      options: [
        { id: "Granit", label: "Granit" },
        { id: "Wood", label: "Wood" },
        { id: "Polyester", label: "Polyester" },
        { id: "Abs", label: "Abs" },
        { id: "Metal", label: "Metal" },
       
      ],
    },
    {
      label: "Product Types",
      name: "product_type",
      componentType: "select",
      options: [
        { id: "Accessory", label: "Accessory" },
        { id: "Figurine", label: "Figurine" },
        { id: "Diy", label: "Diy" },
        { id: "Model Kit", label: "Model Kit" },
       
       
      ],
    },
   
    
    {
      label: "Description",
      name: "description",
      componentType: "textarea",
      placeholder: "Enter product description",
    },
  ];

  export const categoryOptionsMap = {
    'Art Toy': "Art Toy" ,
    Hero : "Hero" ,
    
  };

  export const materialsOptionsMap = {
    Granit: "Granit" ,
        Wood: "Wood" ,
        Polyester: "Polyester" ,
        Abs: "Abs" ,
       Metal: "Metal" ,
    
  };

  export const product_typeOptionsMap = {
    Accessory: "Accessory" ,
      Figurine: "Figurine" ,
      Diy: "Diy" ,
      'Model Kit': "ModelKit" ,
    
  };



  
  export const filterOptions = {
    category: [
      { id: "Art Toy", label: "Art Toy" },
      { id: "Hero", label: "Hero" },
  
    ],
    materials: [
      { id: "Granit", label: "Granit" },
        { id: "Wood", label: "Wood" },
        { id: "Polyester", label: "Polyester" },
        { id: "Abs", label: "Abs" },
        { id: "Metal", label: "Metal" },
    ],
    product_type: [
      { id: "Accessory", label: "Accessory" },
      { id: "Figurine", label: "Figurine" },
      { id: "Diy", label: "Diy" },
      { id: "Model Kit", label: "Model Kit" },
      
    ],
  };
  
  export const sortOptions = [
    { id: "price-lowtohigh", label: "Price: Low to High" },
    { id: "price-hightolow", label: "Price: High to Low" },
    { id: "name-atoz", label: "Name: A to Z" },
    { id: "name-ztoa", label: "Name: Z to A" },
  ];


//   Categories: [ 'Art Toy', 'Hero' ]
// Materials: [ 'Granit', 'Abs', 'Wood', 'Polyester', 'Metal' ]
// Product Types: [ 'Accessory', 'Figurine', 'Diy', 'Model Kit' ]
// https://672a2e23976a834dd02275cf.mockapi.io/category