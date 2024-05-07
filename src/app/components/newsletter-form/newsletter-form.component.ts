import { Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { BtnCustomComponent } from '../btn-custom/btn-custom.component';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [BtnCustomComponent, ReactiveFormsModule],
  providers: [NewsletterService],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss',
})
export class NewsletterFormComponent {
  form: FormGroup;
  isLoading = signal(false); // melhorias na renderização do html ao mudar valor

  constructor(private service: NewsletterService) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.isLoading.set(true);

      this.service
        .sendData(this.form.value.name, this.form.value.email)
        .subscribe({
          error: (err) => {
            console.log(err);
            alert(err);
          },
          next: (res) => {
            console.log(res);

            this.form.reset();
            alert(res.message);
          },
          complete: () => {
            this.isLoading.set(false);
          },
        });
    }
  }
}
