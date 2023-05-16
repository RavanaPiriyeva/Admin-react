import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const Formformik = () => {
  const addProductValidationSchema = Yup.object().shape({
    companyName: Yup.string().required("Company Name alanı boş bırakılamaz!"),
    contactName: Yup.string().required("Contact Name alanı boş bırakılamaz!"),
    contactTitle: Yup.string().required("Contact Titlealanı boş bırakılamaz!"),
    city: Yup.string().required("City alanı boş bırakılamaz!"),
    country: Yup.string().required("Country alanı boş bırakılamaz!"),

  });

  const formik = useFormik({
    initialValues: {
      companyName: "",
      contactName: "",
      contactTitle: "",
      city: "",
      country: "",
    },
    validationSchema: addProductValidationSchema,
    onSubmit: (values) => {
      console.log(values);

      axios
        .post("https://northwind.vercel.app/api/products", values)
        .then((response) => {
          console.log(response);
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <>
        <div>
          <label htmlFor="companyName">Company Name</label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.companyName}
          />
          <p style={{ color: "red" }}>{formik.errors?.companyName}</p>
        </div>
        <div>
          <label htmlFor="contactName">Contact Name</label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.contactName}
          />
          <p style={{ color: "red" }}>{formik.errors?.contactName}</p>
        </div>
        <div>
          <label htmlFor="contactTitle">Contact title</label>
          <input
            id="contactTitle"
            name="contactTitle"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.contactTitle}
          />
          <p style={{ color: "red" }}>{formik.errors?.contactTitle}</p>
        </div>

        <div>
          <label htmlFor="city">city</label>
          <input
            id="city"
            name="city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          <p style={{ color: "red" }}>{formik.errors?.city}</p>
        </div>
        <div>
          <label htmlFor="country">country</label>
          <input
            id="country"
            name="country"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.country}
          />
          <p style={{ color: "red" }}>{formik.errors?.country}</p>
        </div>
        <div>
          {/* <button type="submit">Submit</button> */}
          <input type="submit" value="Submit" />
        </div>
      </>
    </form>
  );
};

export default Formformik;
