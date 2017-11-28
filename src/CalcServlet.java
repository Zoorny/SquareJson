import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("CalcServlet")
public class CalcServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("application/json");
        StringBuilder response = new StringBuilder();
        int a = Integer.parseInt(req.getParameter("a"));
        int b = Integer.parseInt(req.getParameter("b"));
        int c = Integer.parseInt(req.getParameter("c"));
        if (a == 0) {
            response.append("{\"message\":\"not an equation\"}");
        }else{
            int d = b * b - 4 * a * c;
            response.append("{\"discriminant\":"+d+", ");

            if (d < 0) {

                response.append("\"message\":\"no rational roots\"}");

            } else {
                double x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
                double x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
                response.append("\"message\":\"success\", ");
                response.append("\"x1\":"+x1+", ");
                response.append("\"x2\":"+x2 + "}");
            }
        }

        try (PrintWriter writer = resp.getWriter()) {
            writer.write(response.toString());
            writer.flush();
            writer.close();
        }
    }

}

