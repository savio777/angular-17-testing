import { Component, EventEmitter, Input, Output } from '@angular/core';

type BtnVariants = 'primary' | 'secondary';

@Component({
  selector: 'app-btn-custom',
  standalone: true,
  imports: [],
  templateUrl: './btn-custom.component.html',
  styleUrl: './btn-custom.component.scss',
})
export class BtnCustomComponent {
  @Input('btn-text') btnText: string = '';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = 'primary';

  @Output('submit') onSubmit = new EventEmitter<any>();

  submit() {
    this.onSubmit.emit();
  }
}
