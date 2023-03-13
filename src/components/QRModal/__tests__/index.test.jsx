import QRModal from ".."
import { render,screen,fireEvent } from "@testing-library/react"
describe('QR Modal', () => {
    it('should render component', () => {
        const {asFragment} = render(<QRModal />)
        expect(asFragment()).toMatchSnapshot()
    })
    it('should render component with props', () => {
        const onClose = jest.fn()
        render(<QRModal visible onClose={onClose} />)
        expect(screen.getByTestId('container')).toBeInTheDocument()
    })
    it('should call onClose when click on container', () => {
        const onClose = jest.fn()
        render(<QRModal visible onClose={onClose} />)
        fireEvent.click(screen.getByTestId('container'))
        expect(onClose).toHaveBeenCalled()
    })

})