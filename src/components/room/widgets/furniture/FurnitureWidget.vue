<template>
    <window :id="1" width="190px" height="369px" title="Bobbax Hôtel">
        <div class="Habbo-Furniture-Widget__Image">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAC3CAYAAADpVouSAAAEw0lEQVR4Xu3dvWpUQRjG8bONNlqYxiLYqiA2dlaioBA7QUgrWAnBwtprEHIHlikUr8BCLLyBiEEQEkyVRhAbbdadwx7dPbtnz9d8PDPzHwgxh8Dszu88M++7u8FJwZjOl2AScimCTh7yic/mLgF+f39XPozzVx5VDyfImgSZVAmg/lhCgeQEsZSAtpvBN0gOEL0AQiUkZYhRAL5BUoSwCuALJCUIpwCuQVKA8ArgCiRmiKAAtkFihJACsAUSE4Q0wFiQGCCiAhgKogwRNUBfEEWIpAC6gihBJA3QBqIAkRVAE0hIiKwBKpBzl24UkwtXixAQAMwUDIAZhx/fFzd3nnmFAKAGUKXCFwQADQC+IABoAXANAUBHAFcQAPQEsA0BwEAAWxAAjAQYCwGAJYChEABYBugLAYAjgK4QADgGaIMAwBNAEwQAngHqEAAEAliBmP76Wvz58bm6ntX3xZejQz3x6tXX6cH+XrH79Hn5OHIBUQBYSYSBqEbqIEoAGyFSBVEE6ASRCogyQC+IWEFiABgEEQtITACjIFRBYgSwAqECEjOAVYhQICkAOIHwBZISgFMIVyApAniBsAWSMoBXiKEgOQAEgegKkhNAUIgmkBwBJCDqIObj6bmOpfcjQi3Cwwd3i5Pjs1DTS8wLhARD8e8PVcp36EINEgFEqHtvZV62JhEKIID4vwKcEZwRInkAAojFFWBrIhEkgkQs3wOUryKZAAII+ojFe4BEkAgSQSJEUgAEEOtXgM6azlomG1RNIhRAAEH5StUkkgIggKB8bboHOKxF0gEEEFRNHNYiKQACCKomqibBFLA1CaJQvoqgAAEEfQRnhEgKgACCPoI+QjAFbE2CKJSvIihAAEEfwRkhkgIggKCPoI8QTAFbkyAK5asIChBA0EdwRoikAAgg6CPoIwRTwNYkiEL5KoICBBD0EZwRIikAAgj6CPoIwRSwNQmiUL6KoAABBH0EZ4RICoAAgj6CPkIwBWxNgiiUryIoQABBH8EZIZICIICgj6CPEEwBW5MgCuWrCAoQQNBHcEaIpAAIIOgj6CMEU8DWJIhC+SqCAgQQ9BHVCpg0mDGZfU0P9veC3Ru5/heZFcDrx3eKJ28+AOH7DlwEMHOfHn0rXh6eAuELYh1ANTcQHhQ2AQAhAgCEQ4guCahPz9ZkEWQIgJneIFC+WoAYCzBvIaiahlrYAqjmp6HrKWEbAAgRACA6QrhKQH16tqYGEF8AJEIEAIgahO8ErN2azMVQL4WHfhk8NMBSIl7dvl68+HRUXvMNEgpCBWAJYmfrYnH/2nZ5zTeIbwg1gBWI6oJvEF8QqgCNEL5BXEOoA7RC+AJxBRELQGcI1yC2IWIDWIIwP5gDu8uwfYbYgogVYBGi+vc0BMhYiNgB1kEEARkKkQrAJgivIH0hUgPoAuEFpCtEqgB9IJyCtEGkDjAEwglIE0QuAGMgrILUIXIDsAFhBeTnl7fFyfFZkSuATQgrIObj6WaYT0d3GdUHs2a/a97ujX64eBK9G8Ot7cvZArhIRP2u7Ayye+9WK0RqCagvlotE9AbZBJE6gI9EdAZZB5ELQAiIxkN9ESI3gJAQKyAGwvxB33z42C7lqiyFJ10e6qmUoUOF/wLTDtZ8wSfnEAAAAABJRU5ErkJggg==">
        </div>
        <div class="Habbo-Furniture-Widget__Description">
            Bobbax Hotel
        </div>
        <div class="Habbo-Furniture-Widget__Action">
            <tooltip tooltip="Clique pour voir le profil">
                <div class="Habbo-Furniture-Widget__Owner-Profile">
                    <div class="Habbo-Furniture-Widget__Icon">
                    </div>
                    Kozenn
                </div>
            </tooltip>
            <habbo-button :id="2" class="Habbo-Furniture-Widget__Buy-One-Button">Acheter un</habbo-button>
        </div>
    </window>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';


    export default defineComponent({


    });
</script>

<style scoped>

    .Habbo-Furniture-Widget__Image {
        width: calc(100% - 7px);
        max-width: calc(100% - 7px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #333333;
    }

    .Habbo-Furniture-Widget__Description {
        font-family: Goldfish;
        font-size: 9px;
        color: #FFFFFF;
        letter-spacing: 0.1pt;
        padding-top: 5px;
        padding-bottom: 6px;
        padding-left: 2px;
        padding-right: 2px;
        border-bottom: 1px solid #333333;
        width: calc(100% - 7px);
        max-width: calc(100% - 7px);
    }

    .Habbo-Furniture-Widget__Action {
        padding-top: 6px;
        padding-bottom: 5px;
        border-bottom: 1px solid #333333;
        width: calc(100% - 7px);
        max-width: calc(100% - 7px);
    }

    .Habbo-Furniture-Widget__Action .Habbo-Furniture-Widget__Owner-Profile {
        font-family: Goldfish;
        font-size: 9px;
        color: #FFFFFF;
        letter-spacing: 0.1pt;
        display: flex;
        gap: 9px;
        align-items: center;
        width: 100%;
        cursor: pointer;
    }

    .Habbo-Furniture-Widget__Action .Habbo-Furniture-Widget__Owner-Profile .Habbo-Furniture-Widget__Icon {
        width: 13px;
        height: 11px;
        background-image: url(../../../../assets/images/common/buttons/user_profile.png);
    }
    .Habbo-Furniture-Widget__Action .Habbo-Furniture-Widget__Owner-Profile:hover .Habbo-Furniture-Widget__Icon {
        background-position: 0 -11px;
    }

    .Habbo-Furniture-Widget__Action .Habbo-Furniture-Widget__Buy-One-Button {
        margin-top: 8px;
    }


</style>