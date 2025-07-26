import static org.mockito.Mockito.*;
import org.junit.Test;
import static org.junit.Assert.*;
import org.mockito.Mockito;

public class MyServiceTest {
    @Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        MyService service = new MyService(mockApi);
        service.fetchData();  
        verify(mockApi).getData();
    }
}
