import 'jest-styled-components'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json'

expect.addSnapshotSerializer(createSerializer())

configure({ adapter: new Adapter() })
