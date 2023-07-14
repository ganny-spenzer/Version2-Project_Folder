import { Component, OnInit } from '@angular/core';
import { ProductDetails } from './ProductDetails';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminproductserviceService } from '../adminproductservice.service';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css'],
})
export class AdminproductComponent implements OnInit {
  formValue!: FormGroup;
  UserData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  ProductModelObj: ProductDetails = new ProductDetails();

  constructor(
    private formbuilder: FormBuilder,
    private api: AdminproductserviceService
  ) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      amazonimagevalue: [''],
      amazonlinkvalue: [''],
    });
    this.getAllProduct();
  }
  clickAddProduct() {
    // this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postProductDetails() {
    this.ProductModelObj.amazonimagevalue =
      this.formValue.value.amazonimagevalue;
    this.ProductModelObj.amazonlinkvalue = this.formValue.value.amazonlinkvalue;

    this.api.postProduct(this.ProductModelObj).subscribe(
      (res) => {
        // console.log(res);
        alert('Product Added Successfully');
        this.formValue.reset();
        let ref = document.getElementById('cancel');
        ref?.click();
        this.getAllProduct();
      },
      (ere) => {
        alert('Something went wrong');
      }
    );
  }
  getAllProduct() {
    this.api.getProduct().subscribe((res) => {
      this.UserData = res;
    });
  }
  deleteProduct(row: any) {
    this.api.deleteProduct(row.id).subscribe((res) => {
      alert('Product Deleted');
      this.getAllProduct();
    });
  }
  onEdit(row: any, rowedit: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.ProductModelObj.id = row.id;
    console.log(rowedit);
    this.formValue.controls['amazonimagevalue'].setValue(row.amazonimagevalue);
    this.formValue.controls['amazonlinkvalue'].setValue(row.amazonlinkvalue);
  }
  updateProductDetails() {
    alert('Updated Successfully');
    this.ProductModelObj.amazonimagevalue =
      this.formValue.value.amazonimagevalue;
    this.ProductModelObj.amazonlinkvalue = this.formValue.value.amazonlinkvalue;

    this.api
      .updateProduct(this.ProductModelObj, this.ProductModelObj.id)
      .subscribe((res) => {
        this.formValue.reset();
        let ref = document.getElementById('cancel');
        ref?.click();
        this.getAllProduct();
      });
  }
}
