export default function actionCreator(action: string) {
    return function (payload: any) {
        return {
            type: action,
            payload,
        };
    };
}