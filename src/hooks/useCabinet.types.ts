export interface useCabinetProps {
    (n: number, rootInitial?: boolean): {
        drawers: Array<boolean>,
        reset: () => Array<boolean>,
        push: (n: number) => Array<boolean>,
        pull: (n: number) => Array<boolean>,
        reverse: (n: number) => Array<boolean>,
    }
}