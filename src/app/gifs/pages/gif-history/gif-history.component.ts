import { Component, computed, inject } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { GifService } from '../../services/gifs.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
	selector: 'app-gif-history',
	imports: [ListComponent],
	templateUrl: './gif-history.component.html',
})
export class GifHistoryComponent {
	gifService = inject(GifService);
	query = toSignal(
		inject(ActivatedRoute).params.pipe(map((params) => params['query']))
	);

	gifsByKey = computed(() => {
		return this.gifService.getHistoryGifs(this.query())
	})
}
